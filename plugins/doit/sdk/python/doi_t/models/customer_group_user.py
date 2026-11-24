from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerGroupUser(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    user_id: str = Field(alias="userId")
    """User assigned to the customer group."""


class CustomerGroupUserDict(TypedDict):
    user_id: str
