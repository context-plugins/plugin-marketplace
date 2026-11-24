from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .person import Person, PersonDict


class PersonMergeResponse(SdkBaseModel):
    people: Optional[list[Person]] = UNSET


class PersonMergeResponseDict(TypedDict):
    people: NotRequired[list[PersonDict]]
