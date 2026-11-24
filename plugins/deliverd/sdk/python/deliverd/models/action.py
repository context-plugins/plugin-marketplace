from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.default_risk1 import DefaultRisk1OrStr
from .enums.risk_category1 import RiskCategory1OrStr
from .enums.source import SourceOrStr


class Action(SdkBaseModel):
    id: UUID
    action_id: str = Field(alias="actionId")
    name: str
    description: str | None
    input_schema: dict[str, Any] = Field(alias="inputSchema")
    editable_fields: list[str] = Field(alias="editableFields")
    display_title: str | None = Field(alias="displayTitle")
    risk_category: RiskCategory1OrStr = Field(alias="riskCategory")
    default_risk: DefaultRisk1OrStr = Field(alias="defaultRisk")
    source: SourceOrStr
    created_at: str = Field(alias="createdAt")


class ActionDict(TypedDict):
    id: UUID
    action_id: str
    name: str
    description: str | None
    input_schema: dict[str, Any]
    editable_fields: list[str]
    display_title: str | None
    risk_category: RiskCategory1OrStr
    default_risk: DefaultRisk1OrStr
    source: SourceOrStr
    created_at: str
