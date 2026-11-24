from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.logo_name import LogoNameOrStr


class DatahubV1DatasetsRequest(SdkBaseModel):
    name: str
    """The name of the dataset. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), dash (-), and spaces
    between words."""

    description: Optional[str] = UNSET
    """An optional description for the dataset."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional human-readable name shown in the DoiT console and in report results instead of ``name``. 1-64 characters
    after trimming; must not be unique. Ingest always uses ``name``."""

    logo_name: Optional[LogoNameOrStr] = Field(default=UNSET, alias="logoName")
    """An optional preset logo shown next to the dataset in the DoiT console."""


class DatahubV1DatasetsRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    display_name: NotRequired[str]
    logo_name: NotRequired[LogoNameOrStr]
