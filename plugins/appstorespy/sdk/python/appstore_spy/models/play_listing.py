from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PlayListing(SdkBaseModel):
    """A Google Play store listing crawled live for one country and language.

    Unlike ``PlayApp``, nothing here comes from AppstoreSpy storage: the fields are exactly what Google Play served for
    the requested ``country`` and ``language`` at ``crawled``, so any locale Google Play Console accepts can be
    requested."""

    id: str
    """The app package name"""

    country: str
    """Country the listing was requested for (Google Play ``gl``)"""

    language: str
    """Language the listing was requested in (Google Play ``hl``)"""

    crawled: RFC3339DateTime
    """When Google Play was crawled, UTC"""

    url: str
    """Link to the listing on Google Play for this country and language"""

    name: str
    """Title as shown on Google Play"""

    short: Optional[str] = UNSET
    """Short description as shown on Google Play"""

    description: Optional[str] = UNSET
    """Full description as shown on Google Play"""

    whatsnew: Optional[str] = UNSET
    """What's new as shown on Google Play"""

    icon: Optional[str] = UNSET
    """Icon URL"""

    feature: Optional[str] = UNSET
    """Feature graphic URL"""

    trailer: Optional[str] = UNSET
    """Promo video Youtube link"""

    screenshots: list[str]
    """Screenshot URLs in the order Google Play shows them"""

    translated: bool
    """True when the developer has not supplied this language and Google Play shows a machine translation of the default
    listing; ``short`` and ``description`` are then that translation. False means the texts are the developer's own: a
    listing in this language, or the default listing when Google Play does not translate it."""

    translated_from: Optional[str] = UNSET
    """Source language of the machine translation, as Google Play names it in the requested language"""


class PlayListingDict(TypedDict):
    id: str
    country: str
    language: str
    crawled: RFC3339DateTime
    url: str
    name: str
    short: NotRequired[str]
    description: NotRequired[str]
    whatsnew: NotRequired[str]
    icon: NotRequired[str]
    feature: NotRequired[str]
    trailer: NotRequired[str]
    screenshots: list[str]
    translated: bool
    translated_from: NotRequired[str]
