import TimelineItem from "./TimelineItem";



const timelineData = [

  {

    year: "2015-2018",

    title: "Memory",

    description: "kenangan masa lalu",

    images: [

      "/images/11.jpg", "/images/22.jpg", "/images/a.jpg", "/images/b.jpg", "/images/c.jpg",

      "/images/d.jpg", "/images/e.jpg", "/images/f.jpg", "/images/g.jpg", "/images/h.jpg","/images/i.jpg", "/images/m.jpg", "/images/n.jpg",

      "/images/o.jpg", "/images/p.jpg", "/images/q.jpg", "/images/r.jpg", "/images/s.jpg","/images/t.jpg", "/images/u.jpg", "/images/v.jpg",

      "/images/d.jpg", "/images/w.jpg", "/images/x.jpg", "/images/y.jpg", "/images/z.jpg","/images/j.jpg", "/images/k.jpg", "/images/aa.jpg",

      "/images/bb.jpg", "/images/cc.jpg", "/images/dd.jpg", "/images/ee.jpg", "/images/ff.jpg","/images/gg.jpg","/images/hh.jpg","/images/ii.jpg",

      "/images/jj.jpg", "/images/kk.jpg", "/images/ll.jpg", "/images/mm.jpg", "/images/nn.jpg","/images/oo.jpg","/images/pp.jpg","/images/qq.jpg", "/images/rr.jpg", "/images/ss.jpg", "/images/tt.jpg", "/images/uu.jpg","/images/vv.jpg","/images/ww.jpg","/images/xx.jpg","/images/yy.jpg","/images/zz.jpg",

      // ... ใส่ให้ครบตามที่คุณมี

    ],

    isStart: true,

  },

  {

    year: "2558-2562",

    title: "10 ปี แห่งความภาคภูมิใจ",

    description: "ปัจจุบันเราก้าวมาไกลกว่าที่เคยฝัน",

    images: [ "/images/1.jpg", "/images/2.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg","/images/6.jpg"

     

    ],

    isHighlight: true,

  }

];



const TimelineSection = () => {

  return (

    <section className="px-4 py-10 bg-white">

      <div className="max-w-md mx-auto">

        {timelineData.map((item, index) => (

          <TimelineItem

            key={index}

            year={item.year}

            title={item.title}

            description={item.description}

            images={item.images} // ตรวจสอบว่าใช้คำว่า images ตรงกันกับใน Interface

            isHighlight={item.isHighlight}

            isStart={item.isStart}

          />

        ))}

      </div>

    </section>

  );

};



export default TimelineSection; 