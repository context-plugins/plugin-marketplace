from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Project(SdkBaseModel):
    id: str
    name: str
    slug: str


class ProjectDict(TypedDict):
    id: str
    name: str
    slug: str
