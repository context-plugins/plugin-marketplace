from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .class1_enrich_api import Class1EnrichApi, Class1EnrichApiDict
from .division1 import Division1, Division1Dict
from .group1 import Group1, Group1Dict
from .subclass import Subclass, SubclassDict
from .subdivision1 import Subdivision1, Subdivision1Dict


class Anzsic1(SdkBaseModel):
    division: Optional[Division1] = UNSET
    """Details the code and title of the merchant ANZSIC division."""

    subdivision: Optional[Subdivision1] = UNSET
    """Details the code and title of the merchant ANZSIC subdivision."""

    group: Optional[Group1] = UNSET
    """Details the code and title of the merchant ANZSIC group."""

    class_: Optional[Class1EnrichApi] = Field(default=UNSET, alias="class")
    """Details the code and title of the merchant ANZSIC class."""

    subclass: Optional[Subclass] = UNSET


class Anzsic1Dict(TypedDict):
    division: NotRequired[Division1Dict]
    subdivision: NotRequired[Subdivision1Dict]
    group: NotRequired[Group1Dict]
    class_: NotRequired[Class1EnrichApiDict]
    subclass: NotRequired[SubclassDict]
