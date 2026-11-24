from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..error_event import ErrorEvent, ErrorEventDict
from ..find_all_candidate_match_status_event import (
    FindAllCandidateMatchStatusEvent,
    FindAllCandidateMatchStatusEventDict,
)
from ..find_all_run_status_event import FindAllRunStatusEvent, FindAllRunStatusEventDict
from ..find_all_schema_updated_event import FindAllSchemaUpdatedEvent, FindAllSchemaUpdatedEventDict

Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet: TypeAlias = Annotated[
    (
        Annotated[FindAllSchemaUpdatedEvent, Tag("findall.schema.updated")]
        | Annotated[FindAllRunStatusEvent, Tag("findall.status")]
        | Annotated[FindAllCandidateMatchStatusEvent, Tag("findall.candidate.generated")]
        | Annotated[FindAllCandidateMatchStatusEvent, Tag("findall.candidate.matched")]
        | Annotated[FindAllCandidateMatchStatusEvent, Tag("findall.candidate.unmatched")]
        | Annotated[FindAllCandidateMatchStatusEvent, Tag("findall.candidate.discarded")]
        | Annotated[FindAllCandidateMatchStatusEvent, Tag("findall.candidate.enriched")]
        | Annotated[ErrorEvent, Tag("error")]
    ),
    WireDiscriminator("type"),
]

Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetDict: TypeAlias = (
    FindAllSchemaUpdatedEventDict | FindAllRunStatusEventDict | FindAllCandidateMatchStatusEventDict | ErrorEventDict
)
