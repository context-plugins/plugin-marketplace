from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TelecommutePreference(str, Enum):
    """Allows the client to return jobs without a set location, specifically, telecommuting jobs (telecommuting is
    considered by the service as a special location). Job.posting_region indicates if a job permits telecommuting. If
    this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and
    lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the telecommute status of the
    jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have additional Job.addresses may still be matched
    based on other location filters using address or lat_lng. This filter can be used by itself to search exclusively
    for telecommuting jobs, or it can be combined with another location filter to search for a combination of job
    locations, such as "Mountain View" or "telecommuting" jobs. However, when used in combination with other location
    filters, telecommuting jobs can be treated as less relevant than other jobs in the search response. This field is
    only used for job search requests."""

    TELECOMMUTE_PREFERENCE_UNSPECIFIED = "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
    TELECOMMUTE_EXCLUDED = "TELECOMMUTE_EXCLUDED"
    TELECOMMUTE_ALLOWED = "TELECOMMUTE_ALLOWED"
    TELECOMMUTE_JOBS_EXCLUDED = "TELECOMMUTE_JOBS_EXCLUDED"

    __str__ = str.__str__


TelecommutePreferenceOrStr: TypeAlias = Annotated[
    TelecommutePreference | str, open_enum_validator(TelecommutePreference)
]
