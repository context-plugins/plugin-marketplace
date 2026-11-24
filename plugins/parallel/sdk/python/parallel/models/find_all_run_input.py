from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.generator2 import Generator2OrStr
from .exclude_candidate import ExcludeCandidate, ExcludeCandidateDict
from .match_condition import MatchCondition, MatchConditionDict
from .unions.metadata1 import Metadata1, Metadata1Dict
from .webhook import Webhook, WebhookDict


class FindAllRunInput(SdkBaseModel):
    """Input model for FindAll run."""

    objective: str
    """Natural language objective of the FindAll run."""

    entity_type: str
    """Type of the entity for the FindAll run."""

    match_conditions: list[MatchCondition]
    """List of match conditions for the FindAll run."""

    generator: Generator2OrStr
    """Generator for the FindAll run. One of base, core, pro, preview."""

    match_limit: int
    """Maximum number of matches to find for this FindAll run. Must be between 5 and 1000 (inclusive). May return fewer
    results."""

    exclude_list: Optional[list[ExcludeCandidate]] = UNSET
    """List of entity names/IDs to exclude from results. At most 10,000 entries are allowed."""

    metadata: Optional[dict[str, Metadata1]] = UNSET
    """Metadata for the FindAll run."""

    webhook: Optional[Webhook] = UNSET
    """Webhook for the FindAll run."""

    memory_scope_key: Optional[str] = UNSET
    """User-provided key identifying the memory scope to use. Omit to use personal memory, if available."""


class FindAllRunInputDict(TypedDict):
    objective: str
    entity_type: str
    match_conditions: list[MatchConditionDict]
    generator: Generator2OrStr
    match_limit: int
    exclude_list: NotRequired[list[ExcludeCandidateDict]]
    metadata: NotRequired[dict[str, Metadata1Dict]]
    webhook: NotRequired[WebhookDict]
    memory_scope_key: NotRequired[str]
