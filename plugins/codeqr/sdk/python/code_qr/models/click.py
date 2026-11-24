from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Click(SdkBaseModel):
    id: str
    url: str
    continent: str
    country: str
    city: str
    device: str
    browser: str
    os: str
    referer: str
    referer_url: str = Field(alias="refererUrl")
    type_: str = Field(alias="type")
    ip: str


class ClickDict(TypedDict):
    id: str
    url: str
    continent: str
    country: str
    city: str
    device: str
    browser: str
    os: str
    referer: str
    referer_url: str
    type_: str
    ip: str
