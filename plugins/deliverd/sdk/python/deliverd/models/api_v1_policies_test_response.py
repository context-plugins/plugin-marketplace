from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result import Result, ResultDict


class ApiV1PoliciesTestResponse(SdkBaseModel):
    policy_name: str = Field(alias="policyName")
    passed: int
    failed: int
    results: list[Result]
    notes: list[str]


class ApiV1PoliciesTestResponseDict(TypedDict):
    policy_name: str
    passed: int
    failed: int
    results: list[ResultDict]
    notes: list[str]
