from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.autonomy import AutonomyOrStr
from .enums.data_classification import DataClassificationOrStr
from .enums.decision_impact_deliverd_dev_governance_api import DecisionImpactDeliverdDevGovernanceApiOrStr
from .enums.oversight_deliverd_dev_tasks_api import OversightDeliverdDevTasksApiOrStr
from .enums.risk_deliverd_dev_tasks_api import RiskDeliverdDevTasksApiOrStr


class ApiV1TasksGovernanceRequest(SdkBaseModel):
    ai_system_id: OptionalNullable[UUID] = Field(default=UNSET, alias="aiSystemId")
    """The AI system doing the work, from the register (register_ai_system)"""

    purpose: OptionalNullable[str] = UNSET
    """What the AI is used for in this work, in a sentence a reviewer can check against"""

    business_owner: OptionalNullable[str] = Field(default=UNSET, alias="businessOwner")
    """The person accountable for the outcome"""

    technical_owner: OptionalNullable[str] = Field(default=UNSET, alias="technicalOwner")
    """The person accountable for how it is built and run"""

    risk: Optional[RiskDeliverdDevTasksApiOrStr] = UNSET
    """low, medium, high or critical. Never lower than the AI system's own"""

    data_classification: OptionalNullable[DataClassificationOrStr] = Field(default=UNSET, alias="dataClassification")
    personal_data: Optional[bool] = Field(default=UNSET, alias="personalData")
    sensitive_data: Optional[bool] = Field(default=UNSET, alias="sensitiveData")
    customer_facing: Optional[bool] = Field(default=UNSET, alias="customerFacing")
    production_use: Optional[bool] = Field(default=UNSET, alias="productionUse")
    critical_function: OptionalNullable[bool] = Field(default=UNSET, alias="criticalFunction")
    """Supports a critical or important function (DORA Art. 3(22)), as the organisation classifies it. null until
    classified, when production use stands in. Only a person lowers it"""

    autonomy: OptionalNullable[AutonomyOrStr] = UNSET
    decision_impact: OptionalNullable[DecisionImpactDeliverdDevGovernanceApiOrStr] = Field(
        default=UNSET, alias="decisionImpact"
    )
    oversight: OptionalNullable[OversightDeliverdDevTasksApiOrStr] = UNSET
    """How people oversee the AI's work"""

    jurisdictions: Optional[list[str]] = UNSET
    """Where the work or its effects apply, e.g. EU, UK, US-CA"""


class ApiV1TasksGovernanceRequestDict(TypedDict):
    ai_system_id: NotRequired[UUID | None]
    purpose: NotRequired[str | None]
    business_owner: NotRequired[str | None]
    technical_owner: NotRequired[str | None]
    risk: NotRequired[RiskDeliverdDevTasksApiOrStr]
    data_classification: NotRequired[DataClassificationOrStr | None]
    personal_data: NotRequired[bool]
    sensitive_data: NotRequired[bool]
    customer_facing: NotRequired[bool]
    production_use: NotRequired[bool]
    critical_function: NotRequired[bool | None]
    autonomy: NotRequired[AutonomyOrStr | None]
    decision_impact: NotRequired[DecisionImpactDeliverdDevGovernanceApiOrStr | None]
    oversight: NotRequired[OversightDeliverdDevTasksApiOrStr | None]
    jurisdictions: NotRequired[list[str]]
