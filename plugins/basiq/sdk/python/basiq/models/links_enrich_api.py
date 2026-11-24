from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class LinksEnrichApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """Provides a reference link to the original query."""

    logo_master: OptionalNullable[str] = Field(default=UNSET, alias="logo-master")
    """Provides link to master logo. Where null no merchant logo is available."""

    logo_thumb: OptionalNullable[str] = Field(default=UNSET, alias="logo-thumb")
    """Provides link to thumb logo. Where null no merchant logo is available."""


class LinksEnrichApiDict(TypedDict):
    self: NotRequired[str]
    logo_master: NotRequired[str | None]
    logo_thumb: NotRequired[str | None]
