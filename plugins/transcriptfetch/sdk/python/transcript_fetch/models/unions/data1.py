from __future__ import annotations

from typing import TypeAlias

from ..transcript_data import TranscriptData, TranscriptDataDict
from ..transcript_job_data import TranscriptJobData, TranscriptJobDataDict

Data1: TypeAlias = TranscriptJobData | TranscriptData
"""Either a transcript_job placeholder, or a transcript block with null text/segments, depending on how the request
escalated."""

Data1Dict: TypeAlias = TranscriptJobDataDict | TranscriptDataDict
