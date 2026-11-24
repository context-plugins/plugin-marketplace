from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineRunnerOauthClient(SdkBaseModel):
    """All Of object, pipeline_runner_oauth_client."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[str] = UNSET
    """The OAuth client ID."""

    secret: Optional[str] = UNSET
    """The OAuth client secret. This is an optional element that is only provided once."""

    token_endpoint: Optional[str] = UNSET
    """The OAuth token endpoint URL."""

    audience: Optional[str] = UNSET
    """The intended audience for the OAuth token."""


class PipelineRunnerOauthClientDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[str]
    secret: NotRequired[str]
    token_endpoint: NotRequired[str]
    audience: NotRequired[str]
