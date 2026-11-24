from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApplicationInfo2(SdkBaseModel):
    """Job application information."""

    uris: Optional[list[str]] = UNSET
    """Use this URI field to direct an applicant to a website, for example to link to an online application form. The
    maximum number of allowed characters for each entry is 2,000."""

    instruction: Optional[str] = UNSET
    """Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to
    apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and
    unordered list markup tags. The maximum number of allowed characters is 3,000."""

    emails: Optional[list[str]] = UNSET
    """Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of
    allowed characters for each entry is 255."""


class ApplicationInfo2Dict(TypedDict):
    uris: NotRequired[list[str]]
    instruction: NotRequired[str]
    emails: NotRequired[list[str]]
