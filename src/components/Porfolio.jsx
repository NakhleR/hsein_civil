import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { itemData } from '../constants';

const Portfolio = () => {
    return (
        <section className="min-h-screen bg-accent px-6 py-12 sm:px-14 md:px-24">
            <div className="text-center mb-16">
                {/* Section Header */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-fraunces font-bold text-accent2 mb-4">
                    Our Portfolio
                </h1>
                <p className="text-sm sm:text-lg font-avenir mb-11 text-accent2">
                    Welcome to our portfolio. Explore our projects to learn more about what we do.
                </p>

                {/* Masonry ImageList */}
                <ImageList
                    variant="masonry"
                    cols={isMobile ? 1 : 3} // Use 1 column for mobile, 3 for larger devices
                    gap={isMobile ? 10 : 15} // Adjust gap for mobile
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <div className="flex my-6 sm:my-11 flex-col items-start justify-start">
                                <h2 className="font-fraunces font-semibold text-lg sm:text-xl text-accent2">
                                    {item.title}
                                </h2>
                                <p className="font-avenir mt-2 sm:mt-4 text-sm sm:text-md text-left text-accent2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                                    laudantium a quae at, consectetur nisi soluta esse sed sint expedita
                                    necessitatibus distinctio iste id numquam ducimus corrupti ipsam.
                                    Possimus, voluptatibus.
                                </p>
                            </div>
                            <hr className="border-t-2 border-accent2 my-6 sm:my-11" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </section>
    );
};

export default Portfolio;