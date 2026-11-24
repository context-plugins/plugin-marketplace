from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Event(SdkBaseModel):
    id: str
    app: str
    store: str
    type_: str = Field(alias="type")
    title: str
    text: str
    image: str
    country: str
    state: str
    crawled: RFC3339DateTime
    date_from: RFC3339DateTime
    date_to: Optional[RFC3339DateTime] = UNSET
    video: Optional[str] = UNSET


class EventDict(TypedDict):
    id: str
    app: str
    store: str
    type_: str
    title: str
    text: str
    image: str
    country: str
    state: str
    crawled: RFC3339DateTime
    date_from: RFC3339DateTime
    date_to: NotRequired[RFC3339DateTime]
    video: NotRequired[str]
