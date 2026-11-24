from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProblemErrorSkribbleAdditionalInformationApi(SdkBaseModel):
    """Error response envelope returned for all 4xx and 5xx responses with a JSON body. Follows a Problem+JSON-style
    shape. The ``key`` field is optional and reserved for future use."""

    type_: str = Field(alias="type")
    """URI identifying the problem category. The host of this URI depends on the environment the request was made
    against (e.g. ``document-validation.skribble.com`` and ``document-validation.skribble.de`` for the production
    regions; other environments use their respective hosts). Match on the path segment after ``/problem/`` rather than
    the full URI. Known values:

    - ``https://document-validation.skribble.com/problem/problem-with-message`` — generic error with a message
    - ``https://document-validation.skribble.com/problem/entity-not-found`` — requested resource does not exist
    - ``https://document-validation.skribble.com/problem/feature-not-enabled`` — a required feature is not enabled for
        the business
    - ``https://document-validation.skribble.com/problem/constraint-violation`` — request violates a domain constraint
    - ``https://document-validation.skribble.com/problem/limit-exceeded`` — a usage limit was exceeded"""

    method: str
    """HTTP method of the failing request."""

    path: str
    """Request URI of the failing request."""

    status: int
    """HTTP status code, mirroring the response status line."""

    key: Optional[str] = UNSET
    """Optional machine-readable error key. Reserved for future use."""

    message: str
    """Human-readable error message."""


class ProblemErrorSkribbleAdditionalInformationApiDict(TypedDict):
    type_: str
    method: str
    path: str
    status: int
    key: NotRequired[str]
    message: str
