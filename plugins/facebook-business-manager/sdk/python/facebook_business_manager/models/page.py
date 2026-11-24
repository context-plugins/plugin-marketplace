from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_list import CategoryList, CategoryListDict
from .cover import Cover, CoverDict
from .location import Location, LocationDict
from .picture import Picture, PictureDict


class Page(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the Page"""

    name: Optional[str] = UNSET
    """The name of the Page"""

    category: Optional[str] = UNSET
    """The primary category of the Page"""

    category_list: Optional[list[CategoryList]] = UNSET
    """List of categories associated with the Page"""

    about: Optional[str] = UNSET
    """Short description of the Page"""

    description: Optional[str] = UNSET
    """Detailed description of the Page"""

    fan_count: Optional[int] = UNSET
    """Total number of Page likes"""

    followers_count: Optional[int] = UNSET
    """Total number of Page followers"""

    link: Optional[str] = UNSET
    """The URL of the Page on Facebook"""

    website: Optional[str] = UNSET
    """The website listed on the Page"""

    phone: Optional[str] = UNSET
    """Phone number listed on the Page"""

    emails: Optional[list[str]] = UNSET
    """Email addresses listed on the Page"""

    location: Optional[Location] = UNSET
    cover: Optional[Cover] = UNSET
    """The Page cover photo"""

    picture: Optional[Picture] = UNSET
    """The Page profile picture"""

    verification_status: Optional[str] = UNSET
    """Verification status of the Page"""

    is_published: Optional[bool] = UNSET
    """Whether the Page is published and visible"""


class PageDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    category: NotRequired[str]
    category_list: NotRequired[list[CategoryListDict]]
    about: NotRequired[str]
    description: NotRequired[str]
    fan_count: NotRequired[int]
    followers_count: NotRequired[int]
    link: NotRequired[str]
    website: NotRequired[str]
    phone: NotRequired[str]
    emails: NotRequired[list[str]]
    location: NotRequired[LocationDict]
    cover: NotRequired[CoverDict]
    picture: NotRequired[PictureDict]
    verification_status: NotRequired[str]
    is_published: NotRequired[bool]
