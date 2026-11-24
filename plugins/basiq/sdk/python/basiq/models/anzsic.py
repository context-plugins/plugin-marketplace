from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .class_enrich_api import ClassEnrichApi, ClassEnrichApiDict
from .division import Division, DivisionDict
from .group import Group, GroupDict
from .subclass import Subclass, SubclassDict
from .subdivision import Subdivision, SubdivisionDict


class Anzsic(SdkBaseModel):
    division: Optional[Division] = UNSET
    subdivision: Optional[Subdivision] = UNSET
    group: Optional[Group] = UNSET
    class_: Optional[ClassEnrichApi] = Field(default=UNSET, alias="class")
    subclass: Optional[Subclass] = UNSET


class AnzsicDict(TypedDict):
    division: NotRequired[DivisionDict]
    subdivision: NotRequired[SubdivisionDict]
    group: NotRequired[GroupDict]
    class_: NotRequired[ClassEnrichApiDict]
    subclass: NotRequired[SubclassDict]
