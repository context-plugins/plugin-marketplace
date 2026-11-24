from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1DataplaneEvaluatetemplateRequest(SdkBaseModel):
    template: str
    """The mapping template; this can be a request or response template. A template is required for this action."""

    context: str
    """The map that holds all of the contextual information for your resolver invocation. A context is required for this
    action."""


class V1DataplaneEvaluatetemplateRequestDict(TypedDict):
    template: str
    context: str
