from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.build_or_buy import BuildOrBuyOrStr
from .enums.data_classification import DataClassificationOrStr
from .enums.decision_impact import DecisionImpactOrStr
from .enums.entry_type import EntryTypeOrStr
from .enums.environment_model import EnvironmentModelOrStr
from .enums.external_reach import ExternalReachOrStr
from .enums.oversight import OversightOrStr
from .enums.risk import RiskOrStr
from .enums.use_scope import UseScopeOrStr


class ApiV1AiSystemsRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    provider: OptionalNullable[str] = UNSET
    """OpenAI, Anthropic, an internal team…"""

    model: OptionalNullable[str] = UNSET
    model_version: OptionalNullable[str] = Field(default=UNSET, alias="modelVersion")
    prompt_hash: OptionalNullable[str] = Field(default=UNSET, alias="promptHash")
    """A digest of the prompt it runs with (sha256:…, a commit, a version tag), never the prompt"""

    guardrails_hash: OptionalNullable[str] = Field(default=UNSET, alias="guardrailsHash")
    """A digest of its guardrail configuration, never the configuration"""

    purpose: OptionalNullable[str] = UNSET
    business_owner: OptionalNullable[str] = Field(default=UNSET, alias="businessOwner")
    technical_owner: OptionalNullable[str] = Field(default=UNSET, alias="technicalOwner")
    environment: Optional[EnvironmentModelOrStr] = UNSET
    risk: Optional[RiskOrStr] = UNSET
    oversight: OptionalNullable[OversightOrStr] = UNSET
    data_classification: OptionalNullable[DataClassificationOrStr] = Field(default=UNSET, alias="dataClassification")
    personal_data: Optional[bool] = Field(default=UNSET, alias="personalData")
    customer_facing: Optional[bool] = Field(default=UNSET, alias="customerFacing")
    ict_arrangement_id: OptionalNullable[UUID] = Field(default=UNSET, alias="ictArrangementId")
    """The contract in the ICT third-party register the system runs under (GET /api/v1/governance/ict-register)"""

    entry_type: OptionalNullable[EntryTypeOrStr] = Field(default=UNSET, alias="entryType")
    """How the use came to the register: built in-house, a supplier's AI, a feature in a service, a proof of concept, or
    found in use"""

    use_scope: OptionalNullable[UseScopeOrStr] = Field(default=UNSET, alias="useScope")
    """Who uses it: one person for their work, a team or function, or the whole organisation"""

    user_population: OptionalNullable[str] = Field(default=UNSET, alias="userPopulation")
    """Who and how many, in a phrase: 'the 40 claims handlers'"""

    decision_impact: OptionalNullable[DecisionImpactOrStr] = Field(default=UNSET, alias="decisionImpact")
    """What its output feeds into"""

    external_reach: OptionalNullable[ExternalReachOrStr] = Field(default=UNSET, alias="externalReach")
    """Who its output reaches, furthest first"""

    build_or_buy: OptionalNullable[BuildOrBuyOrStr] = Field(default=UNSET, alias="buildOrBuy")
    supplier: OptionalNullable[str] = UNSET
    """The supplier, when bought"""

    entities: Optional[list[str]] = UNSET
    """The legal entities that use it or are affected by it"""

    need_statement: OptionalNullable[str] = Field(default=UNSET, alias="needStatement")
    """Why the use needs AI at all"""

    non_ai_alternative: OptionalNullable[str] = Field(default=UNSET, alias="nonAiAlternative")
    """How the work is, or would be, done without AI"""

    expected_benefit: OptionalNullable[str] = Field(default=UNSET, alias="expectedBenefit")
    """What it is expected to give"""

    annual_cost: OptionalNullable[float] = Field(default=UNSET, alias="annualCost")
    """Yearly cost, with costCurrency"""

    cost_currency: OptionalNullable[str] = Field(default=UNSET, alias="costCurrency")
    """ISO 4217 code, such as EUR"""

    duplicate_of: OptionalNullable[UUID] = Field(default=UNSET, alias="duplicateOf")
    """Triage: the record already in the register that this one repeats"""

    status: Optional[str] = UNSET
    """Not accepted: a record's status follows its lifecycle. Take a step with its transitions instead"""


class ApiV1AiSystemsRequest1Dict(TypedDict):
    name: NotRequired[str]
    provider: NotRequired[str | None]
    model: NotRequired[str | None]
    model_version: NotRequired[str | None]
    prompt_hash: NotRequired[str | None]
    guardrails_hash: NotRequired[str | None]
    purpose: NotRequired[str | None]
    business_owner: NotRequired[str | None]
    technical_owner: NotRequired[str | None]
    environment: NotRequired[EnvironmentModelOrStr]
    risk: NotRequired[RiskOrStr]
    oversight: NotRequired[OversightOrStr | None]
    data_classification: NotRequired[DataClassificationOrStr | None]
    personal_data: NotRequired[bool]
    customer_facing: NotRequired[bool]
    ict_arrangement_id: NotRequired[UUID | None]
    entry_type: NotRequired[EntryTypeOrStr | None]
    use_scope: NotRequired[UseScopeOrStr | None]
    user_population: NotRequired[str | None]
    decision_impact: NotRequired[DecisionImpactOrStr | None]
    external_reach: NotRequired[ExternalReachOrStr | None]
    build_or_buy: NotRequired[BuildOrBuyOrStr | None]
    supplier: NotRequired[str | None]
    entities: NotRequired[list[str]]
    need_statement: NotRequired[str | None]
    non_ai_alternative: NotRequired[str | None]
    expected_benefit: NotRequired[str | None]
    annual_cost: NotRequired[float | None]
    cost_currency: NotRequired[str | None]
    duplicate_of: NotRequired[UUID | None]
    status: NotRequired[str]
