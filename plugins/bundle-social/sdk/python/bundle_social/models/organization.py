from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Organization(SdkBaseModel):
    kind: Literal["organization"] = "organization"
    urn: str
    display: str
    vanity_name: Optional[str] = Field(default=UNSET, alias="vanityName")
    logo_url: Optional[str] = Field(default=UNSET, alias="logoUrl")


class OrganizationDict(TypedDict):
    kind: Literal["organization"]
    urn: str
    display: str
    vanity_name: NotRequired[str]
    logo_url: NotRequired[str]
