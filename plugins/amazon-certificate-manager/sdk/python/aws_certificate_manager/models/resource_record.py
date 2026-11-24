from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResourceRecord(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the DNS record to create in your domain. This is supplied by ACM."""

    type_: Literal["CNAME"] = Field(default="CNAME", alias="Type")
    """The type of DNS record. Currently this can be CNAME."""

    value: str = Field(alias="Value")
    """The value of the CNAME record to add to your DNS database. This is supplied by ACM."""


class ResourceRecordDict(TypedDict):
    name: str
    type_: Literal["CNAME"]
    value: str
