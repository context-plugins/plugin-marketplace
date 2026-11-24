from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_face_liveness_session_request_settings import (
    CreateFaceLivenessSessionRequestSettings,
    CreateFaceLivenessSessionRequestSettingsDict,
)


class CreateFaceLivenessSessionRequest(SdkBaseModel):
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt audit images and reference
    images."""

    settings: Optional[CreateFaceLivenessSessionRequestSettings] = Field(default=UNSET, alias="Settings")
    client_request_token: Optional[str] = Field(default=UNSET, alias="ClientRequestToken")
    """Idempotent token is used to recognize the Face Liveness request. If the same token is used with multiple
    CreateFaceLivenessSession requests, the same session is returned. This token is employed to avoid unintentionally
    creating the same session multiple times."""


class CreateFaceLivenessSessionRequestDict(TypedDict):
    kms_key_id: NotRequired[str]
    settings: NotRequired[CreateFaceLivenessSessionRequestSettingsDict]
    client_request_token: NotRequired[str]
