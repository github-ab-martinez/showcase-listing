import Image from "next/image";
const Entry = (props) => (
  <div className="rounded-t-sm overflow-hidden">
    <div className="border-b">
      <Image
        className="mb-4"
        src={props.data.image.url}
        alt={`Image of ${props.data.image.title} website`}
        width={props.data.image.width}
        height={props.data.image.height}
      />
    </div>
    <div className="p-3 pb-5">
      <h1 className="text-slate-700 font-medium text-lg mb-3">
        {props.data.title}
      </h1>
      <a
        className="bg-blue-800 p-2 rounded-sm text-white text-sm"
        href={props.data.url.value}
        target={props.data.url.target ? props.data.url.target : undefined}
      >
        Visit Site
      </a>
    </div>
  </div>
);

export default Entry;
