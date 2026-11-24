from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReservedResource(SdkBaseModel):
    amount: str
    resource_kind: str = Field(alias="resourceKind")


class ReservedResourceDict(TypedDict):
    amount: str
    resource_kind: str
