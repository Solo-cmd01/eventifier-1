import Cards from "./Cards";
import items from "./Eventlist";

const Events = () => {
  return (
     
    <div className="container mx-auto">
        
      <h1 className="text-center text-4xl my-8 montes font-semibold">Popular Events in Mumbai</h1>
      <div className="flex gap-4 ml-20 lg:ml-20">
           <div className="h-7 w-9 px-1 bg-slate-300 text-center rounded-[13px]">All</div>
           <div className="h-7 w-16 px-1 bg-slate-300 text-center rounded-[13px]">Today</div>
           <div className="h-7 w-24 px-1 bg-slate-300 text-center rounded-[13px]">Tomorrow</div>
           <div className="h-7 w-28 px-1 bg-slate-300 text-center rounded-[13px]">This Weekend</div>
           <div className="h-7 w-12 px-1 bg-slate-300 text-center rounded-[13px]">Free</div>
             
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 items-center ml-20 lg:ml-20">
        {items.slice(0, 6).map((item, index) => (
          <Cards
            key={index}
            date={item.date}
            title={item.title}
            image={item.image}
            time={item.time}
            amount={item.amount}
            interested={item.interested}
            type={item.type}
            code={item.code}
            ticketImage="/public/images/ion_ticket.png"
            starImage="/public/images/Star 1.png"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-60 opensans py-5 border transition-all border-slate-700  rounded-md text-[16px]">See More</button>
      </div>
    </div>
  )
}

export default Events