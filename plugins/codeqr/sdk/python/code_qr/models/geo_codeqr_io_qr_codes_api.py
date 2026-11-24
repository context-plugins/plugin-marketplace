from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeoCodeqrIoQrCodesApi(SdkBaseModel):
    """Geographic segmentation information for the QR code in the JSON format ``{[COUNTRY]: https://example.com }``."""

    model_config = ConfigDict(extra="forbid")

    af: Optional[str] = Field(default=UNSET, alias="AF")
    al: Optional[str] = Field(default=UNSET, alias="AL")
    dz: Optional[str] = Field(default=UNSET, alias="DZ")
    as_: Optional[str] = Field(default=UNSET, alias="AS")
    ad: Optional[str] = Field(default=UNSET, alias="AD")
    ao: Optional[str] = Field(default=UNSET, alias="AO")
    ai: Optional[str] = Field(default=UNSET, alias="AI")
    aq: Optional[str] = Field(default=UNSET, alias="AQ")
    ag: Optional[str] = Field(default=UNSET, alias="AG")
    ar: Optional[str] = Field(default=UNSET, alias="AR")
    am: Optional[str] = Field(default=UNSET, alias="AM")
    aw: Optional[str] = Field(default=UNSET, alias="AW")
    au: Optional[str] = Field(default=UNSET, alias="AU")
    at: Optional[str] = Field(default=UNSET, alias="AT")
    az: Optional[str] = Field(default=UNSET, alias="AZ")
    bs: Optional[str] = Field(default=UNSET, alias="BS")
    bh: Optional[str] = Field(default=UNSET, alias="BH")
    bd: Optional[str] = Field(default=UNSET, alias="BD")
    bb: Optional[str] = Field(default=UNSET, alias="BB")
    by: Optional[str] = Field(default=UNSET, alias="BY")
    be: Optional[str] = Field(default=UNSET, alias="BE")
    bz: Optional[str] = Field(default=UNSET, alias="BZ")
    bj: Optional[str] = Field(default=UNSET, alias="BJ")
    bm: Optional[str] = Field(default=UNSET, alias="BM")
    bt: Optional[str] = Field(default=UNSET, alias="BT")
    bo: Optional[str] = Field(default=UNSET, alias="BO")
    ba: Optional[str] = Field(default=UNSET, alias="BA")
    bw: Optional[str] = Field(default=UNSET, alias="BW")
    bv: Optional[str] = Field(default=UNSET, alias="BV")
    br: Optional[str] = Field(default=UNSET, alias="BR")
    io: Optional[str] = Field(default=UNSET, alias="IO")
    bn: Optional[str] = Field(default=UNSET, alias="BN")
    bg: Optional[str] = Field(default=UNSET, alias="BG")
    bf: Optional[str] = Field(default=UNSET, alias="BF")
    bi: Optional[str] = Field(default=UNSET, alias="BI")
    kh: Optional[str] = Field(default=UNSET, alias="KH")
    cm: Optional[str] = Field(default=UNSET, alias="CM")
    ca: Optional[str] = Field(default=UNSET, alias="CA")
    cv: Optional[str] = Field(default=UNSET, alias="CV")
    ky: Optional[str] = Field(default=UNSET, alias="KY")
    cf: Optional[str] = Field(default=UNSET, alias="CF")
    td: Optional[str] = Field(default=UNSET, alias="TD")
    cl: Optional[str] = Field(default=UNSET, alias="CL")
    cn: Optional[str] = Field(default=UNSET, alias="CN")
    cx: Optional[str] = Field(default=UNSET, alias="CX")
    cc: Optional[str] = Field(default=UNSET, alias="CC")
    co: Optional[str] = Field(default=UNSET, alias="CO")
    km: Optional[str] = Field(default=UNSET, alias="KM")
    cg: Optional[str] = Field(default=UNSET, alias="CG")
    cd: Optional[str] = Field(default=UNSET, alias="CD")
    ck: Optional[str] = Field(default=UNSET, alias="CK")
    cr: Optional[str] = Field(default=UNSET, alias="CR")
    ci: Optional[str] = Field(default=UNSET, alias="CI")
    hr: Optional[str] = Field(default=UNSET, alias="HR")
    cu: Optional[str] = Field(default=UNSET, alias="CU")
    cy: Optional[str] = Field(default=UNSET, alias="CY")
    cz: Optional[str] = Field(default=UNSET, alias="CZ")
    dk: Optional[str] = Field(default=UNSET, alias="DK")
    dj: Optional[str] = Field(default=UNSET, alias="DJ")
    dm: Optional[str] = Field(default=UNSET, alias="DM")
    do: Optional[str] = Field(default=UNSET, alias="DO")
    ec: Optional[str] = Field(default=UNSET, alias="EC")
    eg: Optional[str] = Field(default=UNSET, alias="EG")
    sv: Optional[str] = Field(default=UNSET, alias="SV")
    gq: Optional[str] = Field(default=UNSET, alias="GQ")
    er: Optional[str] = Field(default=UNSET, alias="ER")
    ee: Optional[str] = Field(default=UNSET, alias="EE")
    et: Optional[str] = Field(default=UNSET, alias="ET")
    fk: Optional[str] = Field(default=UNSET, alias="FK")
    fo: Optional[str] = Field(default=UNSET, alias="FO")
    fj: Optional[str] = Field(default=UNSET, alias="FJ")
    fi: Optional[str] = Field(default=UNSET, alias="FI")
    fr: Optional[str] = Field(default=UNSET, alias="FR")
    gf: Optional[str] = Field(default=UNSET, alias="GF")
    pf: Optional[str] = Field(default=UNSET, alias="PF")
    tf: Optional[str] = Field(default=UNSET, alias="TF")
    ga: Optional[str] = Field(default=UNSET, alias="GA")
    gm: Optional[str] = Field(default=UNSET, alias="GM")
    ge: Optional[str] = Field(default=UNSET, alias="GE")
    de: Optional[str] = Field(default=UNSET, alias="DE")
    gh: Optional[str] = Field(default=UNSET, alias="GH")
    gi: Optional[str] = Field(default=UNSET, alias="GI")
    gr: Optional[str] = Field(default=UNSET, alias="GR")
    gl: Optional[str] = Field(default=UNSET, alias="GL")
    gd: Optional[str] = Field(default=UNSET, alias="GD")
    gp: Optional[str] = Field(default=UNSET, alias="GP")
    gu: Optional[str] = Field(default=UNSET, alias="GU")
    gt: Optional[str] = Field(default=UNSET, alias="GT")
    gn: Optional[str] = Field(default=UNSET, alias="GN")
    gw: Optional[str] = Field(default=UNSET, alias="GW")
    gy: Optional[str] = Field(default=UNSET, alias="GY")
    ht: Optional[str] = Field(default=UNSET, alias="HT")
    hm: Optional[str] = Field(default=UNSET, alias="HM")
    va: Optional[str] = Field(default=UNSET, alias="VA")
    hn: Optional[str] = Field(default=UNSET, alias="HN")
    hk: Optional[str] = Field(default=UNSET, alias="HK")
    hu: Optional[str] = Field(default=UNSET, alias="HU")
    is_: Optional[str] = Field(default=UNSET, alias="IS")
    in_: Optional[str] = Field(default=UNSET, alias="IN")
    id: Optional[str] = Field(default=UNSET, alias="ID")
    ir: Optional[str] = Field(default=UNSET, alias="IR")
    iq: Optional[str] = Field(default=UNSET, alias="IQ")
    ie: Optional[str] = Field(default=UNSET, alias="IE")
    il: Optional[str] = Field(default=UNSET, alias="IL")
    it: Optional[str] = Field(default=UNSET, alias="IT")
    jm: Optional[str] = Field(default=UNSET, alias="JM")
    jp: Optional[str] = Field(default=UNSET, alias="JP")
    jo: Optional[str] = Field(default=UNSET, alias="JO")
    kz: Optional[str] = Field(default=UNSET, alias="KZ")
    ke: Optional[str] = Field(default=UNSET, alias="KE")
    ki: Optional[str] = Field(default=UNSET, alias="KI")
    kp: Optional[str] = Field(default=UNSET, alias="KP")
    kr: Optional[str] = Field(default=UNSET, alias="KR")
    kw: Optional[str] = Field(default=UNSET, alias="KW")
    kg: Optional[str] = Field(default=UNSET, alias="KG")
    la: Optional[str] = Field(default=UNSET, alias="LA")
    lv: Optional[str] = Field(default=UNSET, alias="LV")
    lb: Optional[str] = Field(default=UNSET, alias="LB")
    ls: Optional[str] = Field(default=UNSET, alias="LS")
    lr: Optional[str] = Field(default=UNSET, alias="LR")
    ly: Optional[str] = Field(default=UNSET, alias="LY")
    li: Optional[str] = Field(default=UNSET, alias="LI")
    lt: Optional[str] = Field(default=UNSET, alias="LT")
    lu: Optional[str] = Field(default=UNSET, alias="LU")
    mo: Optional[str] = Field(default=UNSET, alias="MO")
    mg: Optional[str] = Field(default=UNSET, alias="MG")
    mw: Optional[str] = Field(default=UNSET, alias="MW")
    my: Optional[str] = Field(default=UNSET, alias="MY")
    mv: Optional[str] = Field(default=UNSET, alias="MV")
    ml: Optional[str] = Field(default=UNSET, alias="ML")
    mt: Optional[str] = Field(default=UNSET, alias="MT")
    mh: Optional[str] = Field(default=UNSET, alias="MH")
    mq: Optional[str] = Field(default=UNSET, alias="MQ")
    mr: Optional[str] = Field(default=UNSET, alias="MR")
    mu: Optional[str] = Field(default=UNSET, alias="MU")
    yt: Optional[str] = Field(default=UNSET, alias="YT")
    mx: Optional[str] = Field(default=UNSET, alias="MX")
    fm: Optional[str] = Field(default=UNSET, alias="FM")
    md: Optional[str] = Field(default=UNSET, alias="MD")
    mc: Optional[str] = Field(default=UNSET, alias="MC")
    mn: Optional[str] = Field(default=UNSET, alias="MN")
    ms: Optional[str] = Field(default=UNSET, alias="MS")
    ma: Optional[str] = Field(default=UNSET, alias="MA")
    mz: Optional[str] = Field(default=UNSET, alias="MZ")
    mm: Optional[str] = Field(default=UNSET, alias="MM")
    na: Optional[str] = Field(default=UNSET, alias="NA")
    nr: Optional[str] = Field(default=UNSET, alias="NR")
    np: Optional[str] = Field(default=UNSET, alias="NP")
    nl: Optional[str] = Field(default=UNSET, alias="NL")
    nc: Optional[str] = Field(default=UNSET, alias="NC")
    nz: Optional[str] = Field(default=UNSET, alias="NZ")
    ni: Optional[str] = Field(default=UNSET, alias="NI")
    ne: Optional[str] = Field(default=UNSET, alias="NE")
    ng: Optional[str] = Field(default=UNSET, alias="NG")
    nu: Optional[str] = Field(default=UNSET, alias="NU")
    nf: Optional[str] = Field(default=UNSET, alias="NF")
    mk: Optional[str] = Field(default=UNSET, alias="MK")
    mp: Optional[str] = Field(default=UNSET, alias="MP")
    no: Optional[str] = Field(default=UNSET, alias="NO")
    om: Optional[str] = Field(default=UNSET, alias="OM")
    pk: Optional[str] = Field(default=UNSET, alias="PK")
    pw: Optional[str] = Field(default=UNSET, alias="PW")
    ps: Optional[str] = Field(default=UNSET, alias="PS")
    pa: Optional[str] = Field(default=UNSET, alias="PA")
    pg: Optional[str] = Field(default=UNSET, alias="PG")
    py: Optional[str] = Field(default=UNSET, alias="PY")
    pe: Optional[str] = Field(default=UNSET, alias="PE")
    ph: Optional[str] = Field(default=UNSET, alias="PH")
    pn: Optional[str] = Field(default=UNSET, alias="PN")
    pl: Optional[str] = Field(default=UNSET, alias="PL")
    pt: Optional[str] = Field(default=UNSET, alias="PT")
    pr: Optional[str] = Field(default=UNSET, alias="PR")
    qa: Optional[str] = Field(default=UNSET, alias="QA")
    re: Optional[str] = Field(default=UNSET, alias="RE")
    ro: Optional[str] = Field(default=UNSET, alias="RO")
    ru: Optional[str] = Field(default=UNSET, alias="RU")
    rw: Optional[str] = Field(default=UNSET, alias="RW")
    sh: Optional[str] = Field(default=UNSET, alias="SH")
    kn: Optional[str] = Field(default=UNSET, alias="KN")
    lc: Optional[str] = Field(default=UNSET, alias="LC")
    pm: Optional[str] = Field(default=UNSET, alias="PM")
    vc: Optional[str] = Field(default=UNSET, alias="VC")
    ws: Optional[str] = Field(default=UNSET, alias="WS")
    sm: Optional[str] = Field(default=UNSET, alias="SM")
    st: Optional[str] = Field(default=UNSET, alias="ST")
    sa: Optional[str] = Field(default=UNSET, alias="SA")
    sn: Optional[str] = Field(default=UNSET, alias="SN")
    sc: Optional[str] = Field(default=UNSET, alias="SC")
    sl: Optional[str] = Field(default=UNSET, alias="SL")
    sg: Optional[str] = Field(default=UNSET, alias="SG")
    sk: Optional[str] = Field(default=UNSET, alias="SK")
    si: Optional[str] = Field(default=UNSET, alias="SI")
    sb: Optional[str] = Field(default=UNSET, alias="SB")
    so: Optional[str] = Field(default=UNSET, alias="SO")
    za: Optional[str] = Field(default=UNSET, alias="ZA")
    gs: Optional[str] = Field(default=UNSET, alias="GS")
    es: Optional[str] = Field(default=UNSET, alias="ES")
    lk: Optional[str] = Field(default=UNSET, alias="LK")
    sd: Optional[str] = Field(default=UNSET, alias="SD")
    sr: Optional[str] = Field(default=UNSET, alias="SR")
    sj: Optional[str] = Field(default=UNSET, alias="SJ")
    sz: Optional[str] = Field(default=UNSET, alias="SZ")
    se: Optional[str] = Field(default=UNSET, alias="SE")
    ch: Optional[str] = Field(default=UNSET, alias="CH")
    sy: Optional[str] = Field(default=UNSET, alias="SY")
    tw: Optional[str] = Field(default=UNSET, alias="TW")
    tj: Optional[str] = Field(default=UNSET, alias="TJ")
    tz: Optional[str] = Field(default=UNSET, alias="TZ")
    th: Optional[str] = Field(default=UNSET, alias="TH")
    tl: Optional[str] = Field(default=UNSET, alias="TL")
    tg: Optional[str] = Field(default=UNSET, alias="TG")
    tk: Optional[str] = Field(default=UNSET, alias="TK")
    to: Optional[str] = Field(default=UNSET, alias="TO")
    tt: Optional[str] = Field(default=UNSET, alias="TT")
    tn: Optional[str] = Field(default=UNSET, alias="TN")
    tr: Optional[str] = Field(default=UNSET, alias="TR")
    tm: Optional[str] = Field(default=UNSET, alias="TM")
    tc: Optional[str] = Field(default=UNSET, alias="TC")
    tv: Optional[str] = Field(default=UNSET, alias="TV")
    ug: Optional[str] = Field(default=UNSET, alias="UG")
    ua: Optional[str] = Field(default=UNSET, alias="UA")
    ae: Optional[str] = Field(default=UNSET, alias="AE")
    gb: Optional[str] = Field(default=UNSET, alias="GB")
    us: Optional[str] = Field(default=UNSET, alias="US")
    um: Optional[str] = Field(default=UNSET, alias="UM")
    uy: Optional[str] = Field(default=UNSET, alias="UY")
    uz: Optional[str] = Field(default=UNSET, alias="UZ")
    vu: Optional[str] = Field(default=UNSET, alias="VU")
    ve: Optional[str] = Field(default=UNSET, alias="VE")
    vn: Optional[str] = Field(default=UNSET, alias="VN")
    vg: Optional[str] = Field(default=UNSET, alias="VG")
    vi: Optional[str] = Field(default=UNSET, alias="VI")
    wf: Optional[str] = Field(default=UNSET, alias="WF")
    eh: Optional[str] = Field(default=UNSET, alias="EH")
    ye: Optional[str] = Field(default=UNSET, alias="YE")
    zm: Optional[str] = Field(default=UNSET, alias="ZM")
    zw: Optional[str] = Field(default=UNSET, alias="ZW")
    ax: Optional[str] = Field(default=UNSET, alias="AX")
    bq: Optional[str] = Field(default=UNSET, alias="BQ")
    cw: Optional[str] = Field(default=UNSET, alias="CW")
    gg: Optional[str] = Field(default=UNSET, alias="GG")
    im: Optional[str] = Field(default=UNSET, alias="IM")
    je: Optional[str] = Field(default=UNSET, alias="JE")
    me: Optional[str] = Field(default=UNSET, alias="ME")
    bl: Optional[str] = Field(default=UNSET, alias="BL")
    mf: Optional[str] = Field(default=UNSET, alias="MF")
    rs: Optional[str] = Field(default=UNSET, alias="RS")
    sx: Optional[str] = Field(default=UNSET, alias="SX")
    ss: Optional[str] = Field(default=UNSET, alias="SS")
    xk: Optional[str] = Field(default=UNSET, alias="XK")


class GeoCodeqrIoQrCodesApiDict(TypedDict):
    af: NotRequired[str]
    al: NotRequired[str]
    dz: NotRequired[str]
    as_: NotRequired[str]
    ad: NotRequired[str]
    ao: NotRequired[str]
    ai: NotRequired[str]
    aq: NotRequired[str]
    ag: NotRequired[str]
    ar: NotRequired[str]
    am: NotRequired[str]
    aw: NotRequired[str]
    au: NotRequired[str]
    at: NotRequired[str]
    az: NotRequired[str]
    bs: NotRequired[str]
    bh: NotRequired[str]
    bd: NotRequired[str]
    bb: NotRequired[str]
    by: NotRequired[str]
    be: NotRequired[str]
    bz: NotRequired[str]
    bj: NotRequired[str]
    bm: NotRequired[str]
    bt: NotRequired[str]
    bo: NotRequired[str]
    ba: NotRequired[str]
    bw: NotRequired[str]
    bv: NotRequired[str]
    br: NotRequired[str]
    io: NotRequired[str]
    bn: NotRequired[str]
    bg: NotRequired[str]
    bf: NotRequired[str]
    bi: NotRequired[str]
    kh: NotRequired[str]
    cm: NotRequired[str]
    ca: NotRequired[str]
    cv: NotRequired[str]
    ky: NotRequired[str]
    cf: NotRequired[str]
    td: NotRequired[str]
    cl: NotRequired[str]
    cn: NotRequired[str]
    cx: NotRequired[str]
    cc: NotRequired[str]
    co: NotRequired[str]
    km: NotRequired[str]
    cg: NotRequired[str]
    cd: NotRequired[str]
    ck: NotRequired[str]
    cr: NotRequired[str]
    ci: NotRequired[str]
    hr: NotRequired[str]
    cu: NotRequired[str]
    cy: NotRequired[str]
    cz: NotRequired[str]
    dk: NotRequired[str]
    dj: NotRequired[str]
    dm: NotRequired[str]
    do: NotRequired[str]
    ec: NotRequired[str]
    eg: NotRequired[str]
    sv: NotRequired[str]
    gq: NotRequired[str]
    er: NotRequired[str]
    ee: NotRequired[str]
    et: NotRequired[str]
    fk: NotRequired[str]
    fo: NotRequired[str]
    fj: NotRequired[str]
    fi: NotRequired[str]
    fr: NotRequired[str]
    gf: NotRequired[str]
    pf: NotRequired[str]
    tf: NotRequired[str]
    ga: NotRequired[str]
    gm: NotRequired[str]
    ge: NotRequired[str]
    de: NotRequired[str]
    gh: NotRequired[str]
    gi: NotRequired[str]
    gr: NotRequired[str]
    gl: NotRequired[str]
    gd: NotRequired[str]
    gp: NotRequired[str]
    gu: NotRequired[str]
    gt: NotRequired[str]
    gn: NotRequired[str]
    gw: NotRequired[str]
    gy: NotRequired[str]
    ht: NotRequired[str]
    hm: NotRequired[str]
    va: NotRequired[str]
    hn: NotRequired[str]
    hk: NotRequired[str]
    hu: NotRequired[str]
    is_: NotRequired[str]
    in_: NotRequired[str]
    id: NotRequired[str]
    ir: NotRequired[str]
    iq: NotRequired[str]
    ie: NotRequired[str]
    il: NotRequired[str]
    it: NotRequired[str]
    jm: NotRequired[str]
    jp: NotRequired[str]
    jo: NotRequired[str]
    kz: NotRequired[str]
    ke: NotRequired[str]
    ki: NotRequired[str]
    kp: NotRequired[str]
    kr: NotRequired[str]
    kw: NotRequired[str]
    kg: NotRequired[str]
    la: NotRequired[str]
    lv: NotRequired[str]
    lb: NotRequired[str]
    ls: NotRequired[str]
    lr: NotRequired[str]
    ly: NotRequired[str]
    li: NotRequired[str]
    lt: NotRequired[str]
    lu: NotRequired[str]
    mo: NotRequired[str]
    mg: NotRequired[str]
    mw: NotRequired[str]
    my: NotRequired[str]
    mv: NotRequired[str]
    ml: NotRequired[str]
    mt: NotRequired[str]
    mh: NotRequired[str]
    mq: NotRequired[str]
    mr: NotRequired[str]
    mu: NotRequired[str]
    yt: NotRequired[str]
    mx: NotRequired[str]
    fm: NotRequired[str]
    md: NotRequired[str]
    mc: NotRequired[str]
    mn: NotRequired[str]
    ms: NotRequired[str]
    ma: NotRequired[str]
    mz: NotRequired[str]
    mm: NotRequired[str]
    na: NotRequired[str]
    nr: NotRequired[str]
    np: NotRequired[str]
    nl: NotRequired[str]
    nc: NotRequired[str]
    nz: NotRequired[str]
    ni: NotRequired[str]
    ne: NotRequired[str]
    ng: NotRequired[str]
    nu: NotRequired[str]
    nf: NotRequired[str]
    mk: NotRequired[str]
    mp: NotRequired[str]
    no: NotRequired[str]
    om: NotRequired[str]
    pk: NotRequired[str]
    pw: NotRequired[str]
    ps: NotRequired[str]
    pa: NotRequired[str]
    pg: NotRequired[str]
    py: NotRequired[str]
    pe: NotRequired[str]
    ph: NotRequired[str]
    pn: NotRequired[str]
    pl: NotRequired[str]
    pt: NotRequired[str]
    pr: NotRequired[str]
    qa: NotRequired[str]
    re: NotRequired[str]
    ro: NotRequired[str]
    ru: NotRequired[str]
    rw: NotRequired[str]
    sh: NotRequired[str]
    kn: NotRequired[str]
    lc: NotRequired[str]
    pm: NotRequired[str]
    vc: NotRequired[str]
    ws: NotRequired[str]
    sm: NotRequired[str]
    st: NotRequired[str]
    sa: NotRequired[str]
    sn: NotRequired[str]
    sc: NotRequired[str]
    sl: NotRequired[str]
    sg: NotRequired[str]
    sk: NotRequired[str]
    si: NotRequired[str]
    sb: NotRequired[str]
    so: NotRequired[str]
    za: NotRequired[str]
    gs: NotRequired[str]
    es: NotRequired[str]
    lk: NotRequired[str]
    sd: NotRequired[str]
    sr: NotRequired[str]
    sj: NotRequired[str]
    sz: NotRequired[str]
    se: NotRequired[str]
    ch: NotRequired[str]
    sy: NotRequired[str]
    tw: NotRequired[str]
    tj: NotRequired[str]
    tz: NotRequired[str]
    th: NotRequired[str]
    tl: NotRequired[str]
    tg: NotRequired[str]
    tk: NotRequired[str]
    to: NotRequired[str]
    tt: NotRequired[str]
    tn: NotRequired[str]
    tr: NotRequired[str]
    tm: NotRequired[str]
    tc: NotRequired[str]
    tv: NotRequired[str]
    ug: NotRequired[str]
    ua: NotRequired[str]
    ae: NotRequired[str]
    gb: NotRequired[str]
    us: NotRequired[str]
    um: NotRequired[str]
    uy: NotRequired[str]
    uz: NotRequired[str]
    vu: NotRequired[str]
    ve: NotRequired[str]
    vn: NotRequired[str]
    vg: NotRequired[str]
    vi: NotRequired[str]
    wf: NotRequired[str]
    eh: NotRequired[str]
    ye: NotRequired[str]
    zm: NotRequired[str]
    zw: NotRequired[str]
    ax: NotRequired[str]
    bq: NotRequired[str]
    cw: NotRequired[str]
    gg: NotRequired[str]
    im: NotRequired[str]
    je: NotRequired[str]
    me: NotRequired[str]
    bl: NotRequired[str]
    mf: NotRequired[str]
    rs: NotRequired[str]
    sx: NotRequired[str]
    ss: NotRequired[str]
    xk: NotRequired[str]
