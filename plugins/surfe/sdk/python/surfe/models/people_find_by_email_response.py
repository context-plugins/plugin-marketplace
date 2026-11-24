from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enriched_person import EnrichedPerson, EnrichedPersonDict


class PeopleFindByEmailResponse(SdkBaseModel):
    people: Optional[list[EnrichedPerson]] = UNSET


class PeopleFindByEmailResponseDict(TypedDict):
    people: NotRequired[list[EnrichedPersonDict]]
