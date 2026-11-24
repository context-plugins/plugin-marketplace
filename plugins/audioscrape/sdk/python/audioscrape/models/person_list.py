from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .person_summary import PersonSummary, PersonSummaryDict


class PersonList(SdkBaseModel):
    persons: list[PersonSummary]
    total: int


class PersonListDict(TypedDict):
    persons: list[PersonSummaryDict]
    total: int
