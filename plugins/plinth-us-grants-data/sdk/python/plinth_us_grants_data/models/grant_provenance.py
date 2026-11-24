from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GrantProvenance(SdkBaseModel):
    """``match_prob`` IS NOW POPULATED ON EVERY RESOLVED ROW, and ``ein_source`` says what it means.

    This previously read "match_prob is null on every row", because it was only ever written on the ``grant_line`` tier,
    which is empty in the published slice. It is now written across the universe: every row with a recipient EIN carries
    a probability, and every row without one carries null.

    ``ein_source`` remains the field to filter on when you want a specific provenance rather than a threshold —
    ``ein_source = 'filed'`` is the filer-stated subset.

    WHERE THE NUMBER COMES FROM. Rows resolved by a RULE carry that rule's measured held-out precision — a per-rule
    estimate applied to its rows, not a posterior. Rows resolved by the MODEL (``ein_source='model'``) carry a genuine
    per-row calibrated probability, isotonic-fitted on a held-out validation split and measured to track observed rates
    within a few tenths of a point.

    An earlier version of this docstring said a calibrated posterior "needs Splink, which is not wired". That is no
    longer true: pipeline/match_model.py fits a gradient-boosted matcher on the residual the rules decline, using
    filer-stated EINs as free ground truth.

    THE CAVEAT THAT TRAVELS WITH IT. Those labels come from 990/990-EZ Schedule I filers, whose recipients skew larger
    and better-registered than the 990-PF names the resolver mostly works on, so the figures are an optimistic estimate
    of deployed precision. An off-corpus 990-PF grantee list scored 0.9876 on the same rules, so the gap is not large —
    but it is one funder."""

    match_prob: Optional[float] = UNSET
    """P(this recipient EIN is correct), on every resolved row. The GRANULARITY differs and ``ein_source`` says which:
    rows resolved by the model carry a per-row calibrated posterior (isotonic-fitted on held-out validation); rows
    resolved by a rule carry that rule's measured held-out precision — a per-rule estimate, not a posterior. Null means
    the row is unresolved, or its provenance predates the field. Filter on it and you keep the rule-resolved majority as
    well as the model's rows. ⚠️ THE MODEL'S VALUES TOP OUT BELOW 1. Isotonic calibration can only emit values it
    observed on validation, so model rows span roughly 0.95-0.965 and NOTHING carries a model probability above ~0.965.
    A filter of ``match_prob > 0.97`` therefore returns zero model rows while still returning ``filed`` (0.995) and
    ``name`` (0.970) — it reads as a confidence threshold and acts as a provenance filter. Use ``ein_source`` if that is
    what you meant."""

    source_tier: Optional[str] = UNSET
    """Which extraction tier produced the row: ``universe`` (lean, from the filing index) or ``matched`` (rich, with a
    confidence). **Currently ``universe`` on every row.**"""

    ein_source: Optional[str] = UNSET
    """How the recipient EIN was arrived at, with the measured precision each carries in ``match_prob``. Ordered
    strongest first; the resolver applies them in this order and a later rule only ever sees what the earlier ones
    declined. ``filed`` (0.995) the filer stated it on the return. ``override_human`` (0.99) an adjudicated correction.
    ``override_keyerror`` (0.98) a filer-stated EIN that exists in no register and is one identifiable keying slip from
    the EIN of the organisation the name resolves to — a correction of the filer, not of us. ``name`` (0.970) exact
    normalised name, unique within state. ``registry-dominant`` (0.970) an ambiguous alias where one EIN holds >=90% of
    the distinct funders who file that name. ``fuzzy`` (0.961) one edit from a registered name, with the ZIP agreeing.
    ``override_llm`` (0.95) an LLM adjudication of an ambiguous string. ``registry`` (0.944) the Schedule I alias
    registry, gated at 2+ distinct funders. ``address`` (0.944) address-as-key with a 2-edit name gate. ``zip`` (0.934)
    same name, disambiguated by recipient ZIP. ``street`` (0.834) same name, disambiguated by street — the weakest rule;
    exclude it if precision matters more than reach. ``model`` a per-row calibrated posterior, see ``match_prob``.
    ``null``: no recipient EIN, or provenance predating this field. Filter to ``filed`` for anything load-bearing."""


class GrantProvenanceDict(TypedDict):
    match_prob: NotRequired[float]
    source_tier: NotRequired[str]
    ein_source: NotRequired[str]
