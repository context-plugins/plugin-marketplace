from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.type import TypeOrStr


class SourceNordicFinancialNewsCalendarEventsApi(SdkBaseModel):
    """Who published the current date. ``article`` is a news article or company announcement. ``company_website`` is the
    issuer's own investor relations calendar. ``null`` when our editors set the date."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    name: OptionalNullable[str] = UNSET
    """The publisher: the outlet that carried the article, or the issuer's investor relations site. ``null`` when the
    article is no longer available."""

    url: OptionalNullable[str] = UNSET
    """The investor relations calendar page, for ``company_website``. ``null`` for ``article``."""

    article_id: OptionalNullable[str] = UNSET
    """ID of the article, for ``article``. Matches ``source_article_id``. ``null`` when the article is no longer
    available, and for ``company_website``."""


class SourceNordicFinancialNewsCalendarEventsApiDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    name: NotRequired[str | None]
    url: NotRequired[str | None]
    article_id: NotRequired[str | None]
