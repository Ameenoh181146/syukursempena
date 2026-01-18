import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    year: "2015-2018",
    title: "Memory",
    description: "kenangan masa lalu",
    images: [
      "/syukursempena/images/11.jpg", "/syukursempena/images/22.jpg", "/syukursempena/images/a.jpg", "/syukursempena/images/b.jpg", "/syukursempena/images/c.jpg",
      "/syukursempena/images/d.jpg", "/syukursempena/images/e.jpg", "/syukursempena/images/f.jpg", "/syukursempena/images/g.jpg", "/syukursempena/images/h.jpg", "/syukursempena/images/i.jpg", "/syukursempena/images/m.jpg", "/syukursempena/images/n.jpg",
      "/syukursempena/images/o.jpg", "/syukursempena/images/p.jpg", "/syukursempena/images/q.jpg", "/syukursempena/images/r.jpg", "/syukursempena/images/s.jpg", "/syukursempena/images/t.jpg", "/syukursempena/images/u.jpg", "/syukursempena/images/v.jpg",
      "/syukursempena/images/d.jpg", "/syukursempena/images/w.jpg", "/syukursempena/images/x.jpg", "/syukursempena/images/y.jpg", "/syukursempena/images/z.jpg", "/syukursempena/images/j.jpg", "/syukursempena/images/k.jpg", "/syukursempena/images/aa.jpg",
      "/syukursempena/images/bb.jpg", "/syukursempena/images/cc.jpg", "/syukursempena/images/dd.jpg", "/syukursempena/images/ee.jpg", "/syukursempena/images/ff.jpg", "/syukursempena/images/gg.jpg", "/syukursempena/images/hh.jpg", "/syukursempena/images/ii.jpg",
      "/syukursempena/images/jj.jpg", "/syukursempena/images/kk.jpg", "/syukursempena/images/ll.jpg", "/syukursempena/images/mm.jpg", "/syukursempena/images/nn.jpg", "/syukursempena/images/oo.jpg", "/syukursempena/images/pp.jpg", "/syukursempena/images/qq.jpg", "/syukursempena/images/rr.jpg", "/syukursempena/images/ss.jpg", "/syukursempena/images/tt.jpg", "/syukursempena/images/uu.jpg", "/syukursempena/images/vv.jpg", "/syukursempena/images/ww.jpg", "/syukursempena/images/xx.jpg", "/syukursempena/images/yy.jpg", "/syukursempena/images/zz.jpg",
       "/syukursempena/images/a1.jpg", "/syukursempena/images/a2.jpg", "/syukursempena/images/a3.jpg",
    ],
    isStart: true,
  },
  {
    year: "2558-2562",
    title: "10 ปี แห่งความภาคภูมิใจ",
    description: "ปัจจุบันเราก้าวมาไกลกว่าที่เคยฝัน",
    images: [ 
      "/syukursempena/images/1.jpg", "/syukursempena/images/2.jpg", "/syukursempena/images/3.jpg", 
      "/syukursempena/images/4.jpg", "/syukursempena/images/5.jpg", "/syukursempena/images/6.jpg"
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
            images={item.images} 
            isHighlight={item.isHighlight}
            isStart={item.isStart}
          />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;