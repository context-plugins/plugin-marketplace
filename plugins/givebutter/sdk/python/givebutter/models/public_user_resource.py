from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicUserResource(SdkBaseModel):
    id: str
    first_name: str
    last_name: str
    email: str


class PublicUserResourceDict(TypedDict):
    id: str
    first_name: str
    last_name: str
    email: str
