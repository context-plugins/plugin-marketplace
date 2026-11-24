from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .destination1 import Destination1, Destination1Dict
from .enums.phase import PhaseOrStr
from .enums.verification import VerificationOrStr


class Execution1(SdkBaseModel):
    id: UUID
    gate_id: UUID = Field(alias="gateId")
    phase: PhaseOrStr
    claim_id: UUID | None = Field(alias="claimId")
    executed_at: str | None = Field(alias="executedAt")
    artifact_sha256: str | None = Field(alias="artifactSha256")
    destination: Destination1 | None
    result: dict[str, Any]
    verification: VerificationOrStr
    detail: str | None
    reported_by: str = Field(alias="reportedBy")
    created_at: str = Field(alias="createdAt")


class Execution1Dict(TypedDict):
    id: UUID
    gate_id: UUID
    phase: PhaseOrStr
    claim_id: UUID | None
    executed_at: str | None
    artifact_sha256: str | None
    destination: Destination1Dict | None
    result: dict[str, Any]
    verification: VerificationOrStr
    detail: str | None
    reported_by: str
    created_at: str
