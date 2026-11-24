from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind_deliverd_dev_governance_api import KindDeliverdDevGovernanceApiOrStr


class ApiV1GovernanceIncidentsReportsRequest(SdkBaseModel):
    kind: KindDeliverdDevGovernanceApiOrStr
    """initial, intermediate, final, or reclassification (as non-major)"""

    content: str
    """What the report says, written for the person who signs it off and for the authority"""

    fields: Optional[dict[str, Any]] = UNSET
    """The report's structured fields. initial: discoveredBy, memberStates, originatedAtThirdParty,
    businessContinuityActivated; intermediate: incidentType, occurredAt, recoveredAt, authorityReference,
    clientsAffected, figuresAreEstimates, temporaryMeasures; final: rootCause, rootCauseAddressedAt, resolvedAt,
    grossCostsEur, financialRecoveriesEur; reclassification: reason"""

    approvers: Optional[list[str]] = UNSET
    """Who signs it off; the organisation's administrators when omitted"""


class ApiV1GovernanceIncidentsReportsRequestDict(TypedDict):
    kind: KindDeliverdDevGovernanceApiOrStr
    content: str
    fields: NotRequired[dict[str, Any]]
    approvers: NotRequired[list[str]]
