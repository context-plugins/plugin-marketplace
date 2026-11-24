from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.default_risk import DefaultRiskOrStr
from .enums.risk_category import RiskCategoryOrStr


class ApiV1ActionsRequest(SdkBaseModel):
    action_id: str = Field(alias="actionId")
    """Dotted, lowercase, stable: ``finance.refund``. Policy is written against this name"""

    name: str
    """What this does, as an approver will read it in a list"""

    description: Optional[str] = UNSET
    """What it means and when it is used, for whoever writes the policy"""

    input_schema: dict[str, Any] = Field(alias="inputSchema")
    """A JSON Schema object over the action's named arguments. A small subset: type/properties/required, fields of
    string, number, integer or boolean, with enum, minimum, maximum, minLength, maxLength and pattern. Anything else is
    refused rather than ignored"""

    editable_fields: Optional[list[str]] = Field(default=UNSET, alias="editableFields")
    """Fields an approver may correct before approving. Omit for approve-or-reject only"""

    display_title: Optional[str] = Field(default=UNSET, alias="displayTitle")
    """The approval headline, templated over the input: ``Refund {{amount}} {{currency}}``"""

    risk_category: Optional[RiskCategoryOrStr] = Field(default=UNSET, alias="riskCategory")
    """What kind of harm this risks"""

    default_risk: Optional[DefaultRiskOrStr] = Field(default=UNSET, alias="defaultRisk")
    """The urgency an approval inherits when the caller declares none"""


class ApiV1ActionsRequestDict(TypedDict):
    action_id: str
    name: str
    description: NotRequired[str]
    input_schema: dict[str, Any]
    editable_fields: NotRequired[list[str]]
    display_title: NotRequired[str]
    risk_category: NotRequired[RiskCategoryOrStr]
    default_risk: NotRequired[DefaultRiskOrStr]
