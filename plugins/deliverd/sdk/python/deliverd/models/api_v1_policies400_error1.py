from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_deliverd_dev_policies_api import ErrorDeliverdDevPoliciesApi, ErrorDeliverdDevPoliciesApiDict


class ApiV1Policies400Error1(SdkBaseModel):
    error: ErrorDeliverdDevPoliciesApi


class ApiV1Policies400Error1Dict(TypedDict):
    error: ErrorDeliverdDevPoliciesApiDict
