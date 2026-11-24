from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .person1 import Person1, Person1Dict


class PersonDeleteRequest(SdkBaseModel):
    people: Optional[list[Person1]] = UNSET


class PersonDeleteRequestDict(TypedDict):
    people: NotRequired[list[Person1Dict]]
