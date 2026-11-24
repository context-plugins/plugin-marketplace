from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links1EnrichApi(SdkBaseModel):
    self: Optional[str] = UNSET
    """Provides a reference link to the original query."""

    logo_master: Optional[str] = Field(default=UNSET, alias="logo-master")
    """Provides link to master logo. Logos are provided in a variety of formats: .svg, .png, .jpg, jpeg, gif. Where null
    no merchant logo is available."""

    logo_thumb: Optional[str] = Field(default=UNSET, alias="logo-thumb")
    """Provides link to thumb logo (where no thumb available master logo is returned for both). Logos are provided in a
    variety of formats: .svg, .png, .jpg, jpeg, gif. Where null no merchant logo is available."""


class Links1EnrichApiDict(TypedDict):
    self: NotRequired[str]
    logo_master: NotRequired[str]
    logo_thumb: NotRequired[str]
