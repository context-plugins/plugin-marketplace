from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.id import IdOrStr


class InsightTypeItem(SdkBaseModel):
    """A single supported Insight type entry. The ``dataSchema`` field describes only the Insight-specific input — it
    does not represent the full ``POST /insights`` request body."""

    type_: Literal["insightType"] = Field(default="insightType", alias="type")
    """Resource type identifier, always ``insightType``."""

    id: IdOrStr
    """Unique identifier for the Insight type. Maps to the ``insightType`` values used by existing Insight endpoints:
    ``account``, ``balance``, ``identity``, ``income``, ``expense-ratio``."""

    support_multiple_users: bool = Field(alias="supportMultipleUsers")
    """Whether this Insight type supports multiple users in a single request."""

    name: str
    """Human-readable name for the Insight type."""

    description: str
    """Description of what the Insight type verifies."""

    data_schema: Any = Field(alias="dataSchema")
    """Describes only the Insight-specific input data accepted by existing Insight endpoints for this type. Does not
    include transport-level fields such as ``users`` or ``type``."""


class InsightTypeItemDict(TypedDict):
    type_: Literal["insightType"]
    id: IdOrStr
    support_multiple_users: bool
    name: str
    description: str
    data_schema: Any
