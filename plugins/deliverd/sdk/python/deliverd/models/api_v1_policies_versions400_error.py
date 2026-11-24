from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_deliverd_dev_policies_api import ErrorDeliverdDevPoliciesApi, ErrorDeliverdDevPoliciesApiDict


class ApiV1PoliciesVersions400Error(SdkBaseModel):
    error: ErrorDeliverdDevPoliciesApi


class ApiV1PoliciesVersions400ErrorDict(TypedDict):
    error: ErrorDeliverdDevPoliciesApiDict
