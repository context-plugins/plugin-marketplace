from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Problem(SdkBaseModel):
    """Error response envelope returned for all 4xx and 5xx responses with a JSON body. Follows a Problem+JSON-style
    shape. The ``key`` field is optional and only present for errors that carry a machine-readable code."""

    type_: str = Field(alias="type")
    """URI identifying the problem category. The host of this URI depends on the environment the request was made
    against (e.g. ``api.skribble.com`` and ``api.skribble.de`` for the production regions; other environments use their
    respective hosts). Match on the path segment after ``/problem/`` rather than the full URI. Known values:

    - ``https://api.skribble.com/problem/problem-with-message`` — generic error with a message
    - ``https://api.skribble.com/problem/entity-not-found`` — requested resource does not exist
    - ``https://api.skribble.com/problem/feature-not-enabled`` — a required feature is not enabled for the business
    - ``https://api.skribble.com/problem/constraint-violation`` — request violates a domain constraint
    - ``https://api.skribble.com/problem/parameterized`` — parameterized error with details
    - ``https://api.skribble.com/problem/limit-exceeded`` — a usage limit was exceeded"""

    method: str
    """HTTP method of the failing request."""

    path: str
    """Request URI of the failing request."""

    status: int
    """HTTP status code, mirroring the response status line."""

    key: Optional[str] = UNSET
    """Optional machine-readable error key. Present for a subset of errors that carry a stable code. Prefer matching on
    this field over parsing ``message``, which is not part of the stable contract.

    Known keys, grouped by category:

    Authentication (``403``):

    - ``error.auth.token_expired``: the access token has expired
    - ``error.auth.token_invalid``: the access token is malformed or otherwise invalid
    - ``error.auth.credentials_invalid``: the supplied credentials were rejected

    Rate limiting (``429``):

    - ``error.rate_limit.exceeded``: a generic rate limit was exceeded
    - ``error.rate_limit.reminder``: the per-signature-request reminder limit was exceeded

    File upload / attachment (``400``):

    - ``file.attachment.unsupported``: the uploaded attachment type is not supported
    - ``file.malware.detected``: malware was detected in the uploaded file

    PDF processing (``400``):

    - ``file.pdf.general_error``: the PDF could not be loaded (corrupt or unreadable)
    - ``file.pdf.encryption.unknown_password``: the PDF is encrypted with an unknown password
    - ``file.pdf.encryption.no_changes_allowed``: the PDF's signature permissions (DocMDP) do not allow the required
        changes
    - ``file.pdf.encryption.unknown_permissions``: the PDF is encrypted with an unknown permissions type
    - ``file.pdf.signature_verification.failed``: verification of an existing PDF signature failed

    Signature request (``400``):

    - ``error.sr.last_document_cannot_be_removed``: the request would remove the only remaining document from the
        signature request; an SR must keep at least one document"""

    message: str
    """Human-readable error message."""


class ProblemDict(TypedDict):
    type_: str
    method: str
    path: str
    status: int
    key: NotRequired[str]
    message: str
