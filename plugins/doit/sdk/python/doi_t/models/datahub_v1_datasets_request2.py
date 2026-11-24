from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.logo_name1 import LogoName1OrStr


class DatahubV1DatasetsRequest2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """Must match the dataset name in the URL path. Included for idempotency; the name cannot be changed."""

    description: Optional[str] = UNSET
    """The new description for the dataset. Omit to keep the current description; send an empty string to clear it."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Human-readable name shown in the DoiT console and in report results instead of ``name``. 1-64 characters after
    trimming; must not be unique. Omit to keep the current display name; send an empty string to clear it and fall back
    to ``name``."""

    logo_name: Optional[LogoName1OrStr] = Field(default=UNSET, alias="logoName")
    """The preset logo shown next to the dataset in the DoiT console. Omit to keep the current logo; send an empty
    string to clear it."""


class DatahubV1DatasetsRequest2Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    display_name: NotRequired[str]
    logo_name: NotRequired[LogoName1OrStr]
