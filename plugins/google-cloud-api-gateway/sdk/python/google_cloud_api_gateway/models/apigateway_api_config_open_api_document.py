from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .apigateway_api_config_file3 import ApigatewayApiConfigFile3, ApigatewayApiConfigFile3Dict


class ApigatewayApiConfigOpenApiDocument(SdkBaseModel):
    """An OpenAPI Specification Document describing an API."""

    document: Optional[ApigatewayApiConfigFile3] = UNSET
    """The OpenAPI Specification document file."""


class ApigatewayApiConfigOpenApiDocumentDict(TypedDict):
    document: NotRequired[ApigatewayApiConfigFile3Dict]
