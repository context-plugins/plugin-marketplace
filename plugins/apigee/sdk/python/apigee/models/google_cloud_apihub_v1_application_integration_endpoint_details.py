from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1ApplicationIntegrationEndpointDetails(SdkBaseModel):
    """The details of the Application Integration endpoint to be triggered for curation."""

    uri: Optional[str] = UNSET
    """Required. The endpoint URI should be a valid REST URI for triggering an Application Integration. Format:
    ``https://integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute`` or
    ``https://{location}-integrations.googleapis.com/v1/{name=projects/*/locations/*/integrations/*}:execute``"""

    trigger_id: Optional[str] = Field(default=UNSET, alias="triggerId")
    """Required. The API trigger ID of the Application Integration workflow."""


class GoogleCloudApihubV1ApplicationIntegrationEndpointDetailsDict(TypedDict):
    uri: NotRequired[str]
    trigger_id: NotRequired[str]
