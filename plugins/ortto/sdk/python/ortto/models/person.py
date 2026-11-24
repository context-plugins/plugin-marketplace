from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Person(SdkBaseModel):
    person_id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    """e.g. created, updated, or suppressed."""


class PersonDict(TypedDict):
    person_id: NotRequired[str]
    status: NotRequired[str]
