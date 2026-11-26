from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.budget_pence import BudgetPence, BudgetPenceDict
from .unions.completed_at import CompletedAt, CompletedAtDict
from .unions.cost_pence import CostPence, CostPenceDict
from .unions.retrieved_count import RetrievedCount, RetrievedCountDict
from .unions.started_at import StartedAt, StartedAtDict


class FdProof(SdkBaseModel):
    """The exact fields signed and verified. See x-forcedream-canonicalization for the precise reduced "signable" object
    this maps to -- it is not simply this whole object."""

    task_id: str
    agent_id: str
    input_hash: str
    output_hash: str
    cost_pence: CostPence
    """Real-world value is numeric but may arrive as a JSON string; coerce with Number(x) semantics before
    canonicalizing."""

    budget_pence: BudgetPence
    external_cost_hash: OptionalNullable[str] = UNSET
    """When present, the signable includes 10 fields instead of 8."""

    retrieved_count: OptionalNullable[RetrievedCount] = UNSET
    started_at: StartedAt
    completed_at: CompletedAt
    """Coerced to a string exactly as JS's String(x) would, not left as a raw number."""

    algorithm: Optional[str] = UNSET
    signature: Optional[str] = UNSET
    """Base64-encoded Ed25519 signature over the SHA-256 digest of the canonical signable string."""

    key_id: Optional[str] = UNSET
    worm_seal: Optional[str] = UNSET
    proof_id: Optional[str] = UNSET


class FdProofDict(TypedDict):
    task_id: str
    agent_id: str
    input_hash: str
    output_hash: str
    cost_pence: CostPenceDict
    budget_pence: BudgetPenceDict
    external_cost_hash: NotRequired[str | None]
    retrieved_count: NotRequired[RetrievedCountDict | None]
    started_at: StartedAtDict
    completed_at: CompletedAtDict
    algorithm: NotRequired[str]
    signature: NotRequired[str]
    key_id: NotRequired[str]
    worm_seal: NotRequired[str]
    proof_id: NotRequired[str]
