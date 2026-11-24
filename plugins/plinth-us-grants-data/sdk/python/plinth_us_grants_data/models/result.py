from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.kind import KindOrStr


class Result(SdkBaseModel):
    ein: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Human-readable kind: Grantmaking foundation or Nonprofit."""

    kind: Optional[KindOrStr] = UNSET
    location: OptionalNullable[str] = UNSET
    """US state, two-letter code."""

    url: Optional[str] = UNSET
    """Absolute canonical URL of the organization's page — stable, and citable."""


class ResultDict(TypedDict):
    ein: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    kind: NotRequired[KindOrStr]
    location: NotRequired[str | None]
    url: NotRequired[str]
