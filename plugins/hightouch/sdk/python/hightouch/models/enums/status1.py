from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """"queueing": The identifiers are being queued for reprocessing. "queued": The identifiers have been queued and
    added to the blocklist. Their associated clusters will be reprocessed next time the graph runs. "reprocessed": The
    identifiers' clusters have been reprocessed during a run. "failed": We failed to queue the identifiers for
    reprocessing. "cancelled": The reprocessing request has been cancelled."""

    QUEUEING = "queueing"
    QUEUED = "queued"
    REPROCESSED = "reprocessed"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
