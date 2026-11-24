from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.mode import ModeOrStr
from .flow_check import FlowCheck, FlowCheckDict
from .test_payload import TestPayload, TestPayloadDict


class TestSubscriptionResponse(SdkBaseModel):
    subscription_id: str = Field(alias="subscriptionId")
    subscription_name: Optional[str] = Field(default=UNSET, alias="subscriptionName")
    url: str
    mode: ModeOrStr
    flow_check: Optional[FlowCheck] = Field(default=UNSET, alias="flowCheck")
    test_payload: Optional[TestPayload] = Field(default=UNSET, alias="testPayload")
    is_success: bool = Field(alias="isSuccess")
    timestamp: RFC3339DateTime


class TestSubscriptionResponseDict(TypedDict):
    subscription_id: str
    subscription_name: NotRequired[str]
    url: str
    mode: ModeOrStr
    flow_check: NotRequired[FlowCheckDict]
    test_payload: NotRequired[TestPayloadDict]
    is_success: bool
    timestamp: RFC3339DateTime
