from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .admission1 import Admission1, Admission1Dict
from .artwork1 import Artwork1, Artwork1Dict
from .attribute import Attribute, AttributeDict
from .contact1 import Contact1, Contact1Dict
from .hotel_option1 import HotelOption1, HotelOption1Dict
from .listen_on1 import ListenOn1, ListenOn1Dict
from .merchant_video1 import MerchantVideo1, MerchantVideo1Dict
from .notable_alumnus1 import NotableAlumnus1, NotableAlumnus1Dict
from .people_also_search_for1 import PeopleAlsoSearchFor1, PeopleAlsoSearchFor1Dict
from .profile1 import Profile1, Profile1Dict
from .rating2 import Rating2, Rating2Dict
from .rating3 import Rating3, Rating3Dict
from .social_post1 import SocialPost1, SocialPost1Dict
from .source11 import Source11, Source11Dict
from .stats_card import StatsCard, StatsCardDict
from .streaming_option1 import StreamingOption1, StreamingOption1Dict
from .things_to_know import ThingsToKnow, ThingsToKnowDict
from .trending_product1 import TrendingProduct1, TrendingProduct1Dict
from .weather import Weather, WeatherDict
from .web_rating1 import WebRating1, WebRating1Dict


class KnowledgeGraph1(SdkBaseModel):
    """Google's Knowledge Graph panel for the queried entity. Omitted from ``result`` when no Knowledge Graph panel
    appears on the SERP — treat it as optional rather than expecting null."""

    title: Optional[str] = UNSET
    """Entity name as shown in the panel header"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Entity category label as rendered by Google (e.g. "American rapper", "French museum"). Free-form string, not an
    enum."""

    kgmid: Optional[str] = UNSET
    """Google Knowledge Graph ID for the entity"""

    description: Optional[str] = UNSET
    """Short description of the entity (may be sourced from Wikipedia or Google's own knowledge base)"""

    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    """URL of the entity's image as served by Google"""

    website: Optional[str] = UNSET
    """Official website URL for the entity"""

    menu: Optional[str] = UNSET
    """Menu URL — present for restaurants and food businesses"""

    trailer: Optional[str] = UNSET
    """Trailer URL — present for films and TV shows"""

    source: Optional[Source11] = UNSET
    """Attribution source for the entity description (typically Wikipedia)"""

    attributes: Optional[list[Attribute]] = UNSET
    """Factual key-value pairs extracted from the panel (e.g. born, genre, label). Keys are free-form strings as
    rendered by Google."""

    profiles: Optional[list[Profile1]] = UNSET
    """Social media and external profile links for the entity"""

    people_also_search_for: Optional[list[PeopleAlsoSearchFor1]] = Field(default=UNSET, alias="peopleAlsoSearchFor")
    """Related entities that users also search for"""

    things_to_know: Optional[list[ThingsToKnow]] = Field(default=UNSET, alias="thingsToKnow")
    """"Things to know" topic clusters extracted from the panel"""

    ratings: Optional[list[Rating3]] = UNSET
    """Review platform ratings (e.g. Rotten Tomatoes, IMDb) — present for films and TV shows"""

    streaming_options: Optional[list[StreamingOption1]] = Field(default=UNSET, alias="streamingOptions")
    """Streaming platform links for films and TV shows"""

    web_ratings: Optional[list[WebRating1]] = Field(default=UNSET, alias="webRatings")
    """Web ratings from review platforms — present for local businesses (e.g. Google, Tripadvisor, Yelp)"""

    stats_card: Optional[StatsCard] = Field(default=UNSET, alias="statsCard")
    """Statistics card — present for sports teams, organizations, and similar entities"""

    social_posts: Optional[list[SocialPost1]] = Field(default=UNSET, alias="socialPosts")
    """Recent social media posts from the entity's official accounts"""

    notable_alumni: Optional[list[NotableAlumnus1]] = Field(default=UNSET, alias="notableAlumni")
    """Notable alumni — present for universities and educational institutions"""

    contact: Optional[list[Contact1]] = UNSET
    """Contact and ordering links — present for local businesses"""

    weather: Optional[Weather] = UNSET
    """Current weather — present for geographic entities (cities, regions)"""

    rating: Optional[Rating2] = UNSET
    """Aggregate star rating — present for local businesses"""

    admission: Optional[list[Admission1]] = UNSET
    """Admission options — present for museums, parks, and ticketed venues"""

    artworks: Optional[list[Artwork1]] = UNSET
    """Notable artworks — present for artists and art institutions"""

    has3d_model: Optional[bool] = Field(default=UNSET, alias="has3dModel")
    """True when Google surfaces a 3D model viewer for the entity"""

    hotel_options: Optional[list[HotelOption1]] = Field(default=UNSET, alias="hotelOptions")
    """Hotel booking options — present for hotel entities"""

    trending_products: Optional[list[TrendingProduct1]] = Field(default=UNSET, alias="trendingProducts")
    """Trending products — present for retail brands"""

    merchant_videos: Optional[list[MerchantVideo1]] = Field(default=UNSET, alias="merchantVideos")
    """Merchant or brand video content — present for retail businesses"""

    listen_on: Optional[list[ListenOn1]] = Field(default=UNSET, alias="listenOn")
    """Music streaming platform links — present for musicians and musical acts"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class KnowledgeGraph1Dict(TypedDict):
    title: NotRequired[str]
    type_: NotRequired[str]
    kgmid: NotRequired[str]
    description: NotRequired[str]
    image_url: NotRequired[str]
    website: NotRequired[str]
    menu: NotRequired[str]
    trailer: NotRequired[str]
    source: NotRequired[Source11Dict]
    attributes: NotRequired[list[AttributeDict]]
    profiles: NotRequired[list[Profile1Dict]]
    people_also_search_for: NotRequired[list[PeopleAlsoSearchFor1Dict]]
    things_to_know: NotRequired[list[ThingsToKnowDict]]
    ratings: NotRequired[list[Rating3Dict]]
    streaming_options: NotRequired[list[StreamingOption1Dict]]
    web_ratings: NotRequired[list[WebRating1Dict]]
    stats_card: NotRequired[StatsCardDict]
    social_posts: NotRequired[list[SocialPost1Dict]]
    notable_alumni: NotRequired[list[NotableAlumnus1Dict]]
    contact: NotRequired[list[Contact1Dict]]
    weather: NotRequired[WeatherDict]
    rating: NotRequired[Rating2Dict]
    admission: NotRequired[list[Admission1Dict]]
    artworks: NotRequired[list[Artwork1Dict]]
    has3d_model: NotRequired[bool]
    hotel_options: NotRequired[list[HotelOption1Dict]]
    trending_products: NotRequired[list[TrendingProduct1Dict]]
    merchant_videos: NotRequired[list[MerchantVideo1Dict]]
    listen_on: NotRequired[list[ListenOn1Dict]]
    redirect_link: NotRequired[str]
