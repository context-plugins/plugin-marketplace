from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.generator import Generator, GeneratorOrStr
from .find_all_enrich_input import FindAllEnrichInput, FindAllEnrichInputDict
from .match_condition import MatchCondition, MatchConditionDict


class FindAllSchema1(SdkBaseModel):
    """Updated FindAll schema."""

    objective: str
    """Natural language objective of the FindAll run."""

    entity_type: str
    """Type of the entity for the FindAll run."""

    match_conditions: list[MatchCondition]
    """List of match conditions for the FindAll run."""

    enrichments: Optional[list[FindAllEnrichInput]] = UNSET
    """List of enrichment inputs for the FindAll run."""

    generator: GeneratorOrStr = Generator.CORE
    """The generator of the FindAll run."""

    match_limit: Optional[int] = UNSET
    """Max number of candidates to evaluate"""


class FindAllSchema1Dict(TypedDict):
    objective: str
    entity_type: str
    match_conditions: list[MatchConditionDict]
    enrichments: NotRequired[list[FindAllEnrichInputDict]]
    generator: NotRequired[GeneratorOrStr]
    match_limit: NotRequired[int]
