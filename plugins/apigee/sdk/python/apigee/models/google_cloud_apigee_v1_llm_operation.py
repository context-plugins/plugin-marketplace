from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1LlmOperation(SdkBaseModel):
    """Represents the pairing of REST resource path, model and the actions (verbs) allowed on the resource path."""

    model: Optional[str] = UNSET
    """Required. LLM model name associated with the API proxy"""

    resource: Optional[str] = UNSET
    """Required. REST resource path associated with the API proxy or remote service."""

    methods: Optional[list[str]] = UNSET
    """Optional. methods refers to the REST verbs as in https://httpwg.org/specs/rfc9110.html For example: GET, POST,
    PUT, DELETE, etc. They need to be in uppercase. When none specified, all verb types are allowed."""


class GoogleCloudApigeeV1LlmOperationDict(TypedDict):
    model: NotRequired[str]
    resource: NotRequired[str]
    methods: NotRequired[list[str]]
